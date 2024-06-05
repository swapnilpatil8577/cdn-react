import { act, render, screen} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should render Body component with Search", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        )
    )

    const searchBtn = screen.getByRole('button', { name: 'Search' })

    const searchInput = screen.getByTestId("searchInput")

    // fireEvent.change(searchInput, { target: { value: "Pizza"}})

    // fireEvent.click(searchBtn)

    const Cards = screen.getAllByTestId("resCard")

    expect(Cards.length).toBe(9)
})