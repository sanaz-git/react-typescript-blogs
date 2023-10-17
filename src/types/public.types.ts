export type TApiResponse = {
  postAPIData: Function;
  status: number;
  statusText: string;
  data: any;
  error: any;
  loading: boolean;
};

export type TPostApiResponse = TApiResponse & {
  postAPIData: Function;
};
