import { FormGroup } from '@angular/forms';

export interface ManipulatorFormStrategy<T> {
  createForm(instance: T): FormGroup;
}
