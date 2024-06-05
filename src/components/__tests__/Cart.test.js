import { act, fireEvent, render, screen} from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should load Resto Menu Component", async () => {
    await act(async () => render(
        <Provider store={appStore}>
            <RestaurantMenu/>
        </Provider>
        )
    )

    const accordianHeader = screen.getByText("Pasta (7)")

    fireEvent.click(accordianHeader)

    expect(screen.getAllByTestId("foodItems").length).toBe(7)
})

