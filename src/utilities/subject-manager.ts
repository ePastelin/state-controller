import { Subject } from "rxjs";

export class SubjectManager<T> {
  private subject$ = new Subject<T>();

  getSubject() {
    return this.subject$.asObservable();
  }

  setSubject(value: T) {
    this.subject$.next(value);
  }
}
