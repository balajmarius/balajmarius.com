"use client";

import { useCallback, useRef, type ReactElement, type SVGProps } from "react";
import {
  clamp,
  motion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

import type { Point, Wave } from "@/hooks/use-commit-waves";

import { COMMITS_CELL_CENTER_RATIO } from "@/utils/const";
import { isNullOrUndefined } from "@/utils/helpers";

import { commitsAnimation } from "@/utils/keyframes";

type CommitsListItemProps = {
  waves: Wave[];
  block: ReactElement<SVGProps<SVGRectElement>>;
  pointerPosition: MotionValue<Point | null>;
};

const getHoverOffset = (cellCenter: Point, pointerPosition: Point | null) => {
  if (isNullOrUndefined(pointerPosition)) {
    return { x: 0, y: 0, scaleIncrease: 0 };
  }

  const { radius, maxInfluence, falloffExponent } = commitsAnimation.hover;

  const deltaX = pointerPosition.x - cellCenter.x;
  const deltaY = pointerPosition.y - cellCenter.y;
  const distanceFromPointer = Math.hypot(deltaX, deltaY);
  const proximity = (radius - Math.min(distanceFromPointer, radius)) / radius;
  const hoverInfluence = maxInfluence * proximity ** falloffExponent;

  return {
    x: deltaX * hoverInfluence,
    y: deltaY * hoverInfluence,
    scaleIncrease: hoverInfluence,
  };
};

const getTransformTarget = (
  cellCenter: Point,
  pointerPosition: Point | null,
  waves: Wave[]
) => {
  const combinedOffset = getHoverOffset(cellCenter, pointerPosition);

  const {
    wavefrontFalloffDistance,
    originFalloffDistance,
    minDirectionLength,
    pushDistance,
    scaleIncrease,
  } = commitsAnimation.wave;

  for (const { origin, radius: waveRadius } of waves) {
    const deltaX = cellCenter.x - origin.x;
    const deltaY = cellCenter.y - origin.y;
    const distanceFromOrigin = Math.hypot(deltaX, deltaY);
    const distanceFromWavefront = Math.abs(
      distanceFromOrigin - waveRadius.get()
    );

    const waveFalloff =
      distanceFromWavefront / wavefrontFalloffDistance +
      distanceFromOrigin / originFalloffDistance;
    const waveInfluence = Math.exp(-waveFalloff);

    const directionLength = Math.max(distanceFromOrigin, minDirectionLength);
    const displacementFactor = (waveInfluence * pushDistance) / directionLength;

    combinedOffset.x += deltaX * displacementFactor;
    combinedOffset.y += deltaY * displacementFactor;
    combinedOffset.scaleIncrease += waveInfluence * scaleIncrease;
  }

  const { maxTranslation, maxScaleIncrease } = commitsAnimation.limits;

  return {
    x: clamp(-maxTranslation, maxTranslation, combinedOffset.x),
    y: clamp(-maxTranslation, maxTranslation, combinedOffset.y),
    scale:
      commitsAnimation.baseScale +
      Math.min(combinedOffset.scaleIncrease, maxScaleIncrease),
  };
};

const CommitsListItem = ({
  block,
  pointerPosition,
  waves,
}: CommitsListItemProps) => {
  const cellCenterRef = useRef<Point>({ x: 0, y: 0 });

  const { x, y, width, height, rx, ry } = block.props;

  const measureCellCenter = useCallback((hitArea: SVGRectElement | null) => {
    const svg = hitArea?.ownerSVGElement;

    if (isNullOrUndefined(hitArea) || isNullOrUndefined(svg)) {
      return;
    }

    const cellBounds = hitArea.getBoundingClientRect();
    const svgBounds = svg.getBoundingClientRect();
    const halfWidth = cellBounds.width * COMMITS_CELL_CENTER_RATIO;
    const halfHeight = cellBounds.height * COMMITS_CELL_CENTER_RATIO;

    cellCenterRef.current = {
      x: cellBounds.left - svgBounds.left + halfWidth,
      y: cellBounds.top - svgBounds.top + halfHeight,
    };
  }, []);

  const transformTarget = useTransform(() => {
    return getTransformTarget(
      cellCenterRef.current,
      pointerPosition.get(),
      waves
    );
  });

  const targetX = useTransform(transformTarget, (transform) => transform.x);
  const targetY = useTransform(transformTarget, (transform) => transform.y);
  const targetScale = useTransform(
    transformTarget,
    (transform) => transform.scale
  );

  const animatedX = useSpring(targetX, commitsAnimation.spring);
  const animatedY = useSpring(targetY, commitsAnimation.spring);
  const animatedScale = useSpring(targetScale, commitsAnimation.spring);

  return (
    <>
      <motion.g
        className="pointer-events-none transform-fill origin-center"
        style={{
          x: animatedX,
          y: animatedY,
          scale: animatedScale,
        }}
      >
        {block}
      </motion.g>

      <rect
        ref={measureCellCenter}
        aria-hidden="true"
        fill="transparent"
        x={x}
        y={y}
        width={width}
        height={height}
        rx={rx}
        ry={ry}
      />
    </>
  );
};

export default CommitsListItem;
