import type { ComponentType } from "react";
import { HomePage } from "./pages/home/HomePage";
import { GettingStartedPage } from "./pages/guide/GettingStartedPage";
import { ThemingPage } from "./pages/guide/ThemingPage";
import { ArchitecturePage } from "./pages/guide/ArchitecturePage";
import { ContributingPage } from "./pages/guide/ContributingPage";
import { ChangelogPage } from "./pages/guide/ChangelogPage";
import { ButtonPage } from "./pages/components/ButtonPage";
import { CardPage } from "./pages/components/CardPage";
import { InputPage } from "./pages/components/InputPage";
import { TextareaPage } from "./pages/components/TextareaPage";
import { TogglePage } from "./pages/components/TogglePage";
import { CheckboxPage } from "./pages/components/CheckboxPage";
import { RadioGroupPage } from "./pages/components/RadioGroupPage";
import { SliderPage } from "./pages/components/SliderPage";
import { SelectPage } from "./pages/components/SelectPage";
import { TabsPage } from "./pages/components/TabsPage";
import { AccordionPage } from "./pages/components/AccordionPage";
import { ModalPage } from "./pages/components/ModalPage";
import { TooltipPage } from "./pages/components/TooltipPage";
import { TablePage } from "./pages/components/TablePage";
import { PaginationPage } from "./pages/components/PaginationPage";
import { SpinnerPage } from "./pages/components/SpinnerPage";
import { SkeletonPage } from "./pages/components/SkeletonPage";
import { BreadcrumbPage } from "./pages/components/BreadcrumbPage";
import { BadgePage } from "./pages/components/BadgePage";
import { AlertPage } from "./pages/components/AlertPage";
import { AvatarPage } from "./pages/components/AvatarPage";
import { IconButtonPage } from "./pages/components/IconButtonPage";
import { ProgressPage } from "./pages/components/ProgressPage";

export interface PageEntry {
  component: ComponentType;
}

export const pages: Record<string, PageEntry> = {
  "/": { component: HomePage },
  "/getting-started": { component: GettingStartedPage },
  "/theming": { component: ThemingPage },
  "/architecture": { component: ArchitecturePage },
  "/contributing": { component: ContributingPage },
  "/changelog": { component: ChangelogPage },
  "/components/button": { component: ButtonPage },
  "/components/card": { component: CardPage },
  "/components/input": { component: InputPage },
  "/components/textarea": { component: TextareaPage },
  "/components/toggle": { component: TogglePage },
  "/components/checkbox": { component: CheckboxPage },
  "/components/radiogroup": { component: RadioGroupPage },
  "/components/slider": { component: SliderPage },
  "/components/select": { component: SelectPage },
  "/components/tabs": { component: TabsPage },
  "/components/accordion": { component: AccordionPage },
  "/components/modal": { component: ModalPage },
  "/components/tooltip": { component: TooltipPage },
  "/components/table": { component: TablePage },
  "/components/pagination": { component: PaginationPage },
  "/components/spinner": { component: SpinnerPage },
  "/components/skeleton": { component: SkeletonPage },
  "/components/breadcrumb": { component: BreadcrumbPage },
  "/components/badge": { component: BadgePage },
  "/components/alert": { component: AlertPage },
  "/components/avatar": { component: AvatarPage },
  "/components/icon-button": { component: IconButtonPage },
  "/components/progress": { component: ProgressPage },
};
