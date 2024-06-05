import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import '@testing-library/jest-dom'


it("Should render Restaurant card component with Props data", ()=> {

    render(<RestaurantCard resData= {MOCK_DATA}/>)

    const name = screen.getByText('Pizza Hut')

    expect(name).toBeInTheDocument()
})