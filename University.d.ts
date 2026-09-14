import Advance from '@civ-clone/core-science/Advance';
export declare class University extends Advance {
  /**
   * A save records this class by name, and the name is ambiguous:
   * `University` is also a `CityImprovement` in `base-city-improvement-university`.
   *
   * Without a tag, `ClassRegistry` refuses to register either one — a
   * save naming it could hydrate into the wrong class — so the engine
   * would load with the type missing rather than wrong. This is
   * 02-design-review.md §7 applied where it is load-bearing rather than
   * across all 303 classes.
   *
   * Internal references keep the short name: this is the persisted
   * identity, not the export. `import University from …` is unchanged.
   */
  static readonly type = 'UniversityAdvance';
}
export default University;
