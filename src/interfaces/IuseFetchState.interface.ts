import { IGifGridItem } from ".";

export interface IuseFetchState{
    data: IGifGridItem[] | never[];
    isLoading: boolean;
}