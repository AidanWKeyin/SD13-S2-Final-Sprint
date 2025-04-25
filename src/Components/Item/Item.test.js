import Item from './Item'
import React from 'react'
import { render, screen } from '@testing-library/react'

test('all text is present', () => {
    render(<Item key={1} id={46} name={"Test Item"} image={"https://image.example"} new_price={99.99} old_price={109.99}/>);
    const nameElement = screen.getByText("Test Item");
    expect(nameElement).toBeInTheDocument();
    const newPriceElement = screen.getByText("$99.99");
    expect(newPriceElement).toBeInTheDocument();
    const oldPriceElement = screen.getByText("$109.99");
    expect(oldPriceElement).toBeInTheDocument();
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "https://image.example");
  });
  