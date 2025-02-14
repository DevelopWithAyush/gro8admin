export interface StartupData {
  name: string;
  registeredName: string;
  websiteUrl: string;
  monthAndYearOfInc: string;
  about: string;
  startupSector: string;
  companyType: string;
  startupAddress: string;
  country: string;
  state: string;
  city: string;
  noOfEmployees: number;
}

export interface BusinessData {
  gstinNo: string;
  sebiDraftOfferDocNo: string;
  productServiceDesc: string;
  elevatorPitch: string;
  productVideoShowcase: { imageUri: string; };
  productImages: { imageUri: string; };
  businessModelDesc: string;
  problemBusinessSolves: string;
  competetors: string;
  whatMakesProductStandout: string;
  existingFunding: string;
  targetCustomersBasedIn: number[];
  typesOfSales: number[];
  categories: number[];
  maturityDesc: string;
  keyClients: string;
}

export interface TeamData {
  members: Array<{
    name: string;
    designation: string;
    linkedinUrl: string;
  }>;
  howFundingTeamKnowsEachOther: string;
  whyDidYouCreateThisStartup: string;
  foundersWorkingOnFullTime: boolean;
}

export interface KPIData {
  businessUpdates: string;
  revenueFile: { imageUri: string; };
  kpiIndicator: { imageUri: string; };
}

export interface GrantsAndFundingData {
  hasStartupReceivedGrantsOrFunding: number;
  schemeName: string;
  grantReceived: string;
  currency: string;
}

export interface DealData {
  howIsYourTeamBestAtProblemSolving: string;
  whatIsYourVision: string;
  whatIsGoToMarketStrategyAdopted: string;
  whenDoYouPlanToCloseThisRound: string;
  investmentTermDocs: { imageUri: string; };
}

export interface AcceleratorData {
  partOfExistingAcceleratorProgram: boolean;
  acceleratorName: string;
  acceleratorType: string;
  mentorName: string;
  mentorLinkedinUrl: string;
  equityGivenToMentor: number;
  equityGivenToMentorCurrency: string;
  equityGivenToAccelerator: number;
  equityGivenToAcceleratorCurrency: string;
} 