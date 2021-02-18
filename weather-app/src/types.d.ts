type iBored = {
  activity: string;
  type: string;
  participants: string;
  price: number;
  link: string;
  key: string;
  accessibility: number;
};

//handles quotes state
type QuoteProps = {
  chuckQuote?: string;
  kanyeQuote?: string;
  wholesomeQuote?: {
    text: string;
    author: string;
  }[];
  trumpQuote?: string;
  localQuote?: {
    id: number;
    quote: string;
    author: string;
  }[];
};

//types for Quote API's
type chuckReq = {
  value: string;
};
type kanyeReq = {
  quote: string;
};
type wholesomeReq = {
  text: string;
  author: string;
}[];
type trumpReq = {
  messages: string;
};
type localQuote = {
  id: number;
  quote: string;
  author: string;
}[];

//Weather
type post = {
  method: string;
  url: string;
  data: string;
};

interface DayWeather {
  base: string;
  clouds: {};
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    temp_max: number;
    temp_min: number;
    temp: number;
    feels_like: number
  };
  name: string;
  sys: {
    type: number;
    id: number;
    sunrise: number;
    sunset: number;
    country: string;
  };
  timezone: number;
  visibility: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {};
};
  
interface WeekWeather {
  current: {};
  daily: {}[];
  hourly: {}[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};

interface WeatherProps<T> {
  weather?: T;
  setWeather: (weather: T) => void;
}

interface Quotes {
  text: string;
  author: string;
}