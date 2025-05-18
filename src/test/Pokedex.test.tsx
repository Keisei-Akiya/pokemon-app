import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pokedex } from '@/components/Pokedex';

describe(Pokedex, () => {
  test('should render without crashing', () => {
    // Render the Pokedex component
    render(<Pokedex />);

    // Check if the component rendered successfully
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should display loading message initially', () => {
    // Render the Pokedex component
    const { getByText } = render(<Pokedex />);

    // Check if the loading message is displayed
    expect(getByText(/Loading.../i)).toBeInTheDocument();
  });
});
