import { createElement } from "react";

import { ButtonDemo } from "./demos/button";
import { CardDemo } from "./demos/card";
import { InputDemo } from "./demos/input";
import { TextareaDemo } from "./demos/textarea";
import { ToggleDemo } from "./demos/toggle";
import { CheckboxDemo } from "./demos/checkbox";
import { RadiogroupDemo } from "./demos/radiogroup";
import { SliderDemo } from "./demos/slider";
import { SelectDemo } from "./demos/select";
import { TabsDemo } from "./demos/tabs";
import { AccordionDemo } from "./demos/accordion";
import { ModalDemo } from "./demos/modal";
import { TooltipDemo } from "./demos/tooltip";
import { TableDemo } from "./demos/table";
import { PaginationDemo } from "./demos/pagination";
import { SpinnerDemo } from "./demos/spinner";
import { SkeletonDemo } from "./demos/skeleton";
import { BreadcrumbDemo } from "./demos/breadcrumb";
import { BadgeDemo } from "./demos/badge";
import { AlertDemo } from "./demos/alert";
import { AvatarDemo } from "./demos/avatar";
import { IconButtonDemo } from "./demos/icon-button";
import { ProgressDemo } from "./demos/progress";

export const DEMOS = {
  button: ButtonDemo,
  card: CardDemo,
  input: InputDemo,
  textarea: TextareaDemo,
  toggle: ToggleDemo,
  checkbox: CheckboxDemo,
  radiogroup: RadiogroupDemo,
  slider: SliderDemo,
  select: SelectDemo,
  tabs: TabsDemo,
  accordion: AccordionDemo,
  modal: ModalDemo,
  tooltip: TooltipDemo,
  table: TableDemo,
  pagination: PaginationDemo,
  spinner: SpinnerDemo,
  skeleton: SkeletonDemo,
  breadcrumb: BreadcrumbDemo,
  badge: BadgeDemo,
  alert: AlertDemo,
  avatar: AvatarDemo,
  "icon-button": IconButtonDemo,
  progress: ProgressDemo,
};

export { createElement };