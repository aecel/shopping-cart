import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import JestLesson from "./JestLesson"

describe("JestLesson component", () => {
  it("renders magnificent monkeys", () => {
    const { container } = render(<JestLesson />)
    expect(container).toMatchSnapshot()
  })

  it("renders radical rhinos after button click", () => {
    render(<JestLesson />)

    const button = screen.getByRole("button", { name: "Click Me" })

    userEvent.click(button)

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i)
  })
})
