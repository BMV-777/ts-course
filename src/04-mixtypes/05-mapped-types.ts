type PcBrand = {
  name: string;
  country: string;
  createdAt: Date;
};

type WellKnownBrand =
  | "apple"
  | "lenovo"
  | "hp"
  | "dell"
  | "microsoft"
  | "huawei";

type MyPCRecord = {
  [BrandKay in WellKnownBrand]?: PcBrand;
};

const brandRecords: MyPCRecord = {
  apple: {
    country: "USA",
    createdAt: new Date(),
    name: "Apple",
  },
};

function printPcCatalog(pcCatalog: MyPCRecord) {
  console.log(pcCatalog.dell?.country);
}

type PartOfWindow = {
  [Key in "document" | "screen" | "navigator"]?: Window[Key];
};

const p: PartOfWindow = {
  screen: window.screen,
};

export {};
