export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactUs",
}

export interface BenefitsType {
  icon: JSX.Element;
  title: string;
  description: string;
}
