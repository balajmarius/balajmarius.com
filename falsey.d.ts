declare module "falsey" {
  function falsey<T>(
    value: T,
  ): value is Extract<T, false | null | undefined | "" | 0>;
  export default falsey;
}
