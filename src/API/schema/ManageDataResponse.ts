import { OrderState, lunchBoxType } from "./Enums"

export type GetManageDataResponse = {
    headerData: {
        paid: number,
        owed: number,
        daysUnordered: number,
    },
    bodyData: {
        state: OrderState,
        date: Date,
        displayDate: string,
        id: string | undefined,
        lunchBox: lunchBoxType | "-",
        price: "65" | "70" | "-",
        selectedMeal: string | "-",
        mealOptions: string[]
    }[]
}
