"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";

const COMMAND = "git status";
const DURATION = 8200;
const STATUS =
  "On branch main\nYour branch is up to date with 'origin/main'.\n\nnothing to commit, working tree clean";

export default function ClaudeCodeBashMode() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(true);
  const [visible, setVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const running = !reduceMotion && visible && tabVisible;
  const bash = time >= 1200 && time < 4500;
  const command = bash
    ? COMMAND.slice(0, Math.max(0, Math.floor((time - 2400) / 100)))
    : "";

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(
      () => setTime((value) => (value + 40) % DURATION),
      40
    );
    return () => window.clearInterval(timer);
  }, [running]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const visibility = () => setTabVisible(!document.hidden);
    const motion = () => {
      setReduceMotion(media.matches);
      if (media.matches) setTime(4500);
    };
    motion();
    visibility();
    document.addEventListener("visibilitychange", visibility);
    media.addEventListener("change", motion);

    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting)
    );
    if (rootRef.current) observer.observe(rootRef.current);

    return () => {
      document.removeEventListener("visibilitychange", visibility);
      media.removeEventListener("change", motion);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.artifact}>
      <div
        className={styles.terminal}
        aria-label="Animated Claude Code terminal"
      >
        <header className={styles.terminalHeader}>
          <div className={styles.trafficLights} aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>Claude Code</span>
        </header>
        <div className={styles.transcript} aria-label="Command output">
          {time >= 4500 ? (
            <>
              <div className={styles.executed}>
                <span className={styles.bang}>!</span> {COMMAND}
              </div>
              <pre>{STATUS}</pre>
            </>
          ) : (
            <div className={styles.welcome}>
              Run a shell command without leaving Claude Code.
            </div>
          )}
        </div>
        <div
          className={[styles.prompt, bash ? styles.bashPrompt : ""].join(" ")}
        >
          <span className={styles.promptSymbol}>{bash ? "!" : "❯"}</span>
          <div className={styles.demoInput}>
            {command}
            <span
              className={[styles.caret, running ? styles.blinking : ""].join(
                " "
              )}
              aria-hidden="true"
            />
          </div>
        </div>
        <div
          className={[styles.modeHint, bash ? styles.bashHint : ""].join(" ")}
        >
          {bash ? "bash mode · esc to exit" : "! for bash mode"}
        </div>
      </div>
    </div>
  );
}
