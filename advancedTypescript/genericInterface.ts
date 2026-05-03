interface IDeveloper<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartwatch: T;
  bike?: X;
}

interface IBrandCharaWatch {
  heartRate: number;
  stopwatch: boolean;
}

interface IAppleWatch {
  heartRate: number;
  hasCalling: boolean;
  hasCalculator: boolean;
  hasAiFeature: boolean;
}

const poorDeveloper: IDeveloper<
  IBrandCharaWatch,
  {
    brand: "Yamaha";
    engineCapacity: "200CC";
  }
> = {
  name: "Mr.X",
  salary: 2000,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2021",
  },
  smartwatch: {
    heartRate: 200,
    stopwatch: true,
  },
  bike: { brand: "Yamaha", engineCapacity: "200CC" },
};

const richDeveloper: IDeveloper<IAppleWatch> = {
  name: "Mr.Y",
  salary: 4000,
  device: {
    brand: "hp",
    model: "A21",
    releasedYear: "2021",
  },
  smartwatch: {
    heartRate: 200,
    hasCalling: true,
    hasCalculator: true,
    hasAiFeature: false,
  },
  bike: null,
};
