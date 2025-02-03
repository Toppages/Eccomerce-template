import { SimpleGrid } from '@mantine/core';
import './Index.css';

const cards = Array.from({ length: 25 }, (_, i) => i + 1);

function MostProductS() {
  return (
    <SimpleGrid
      cols={2}
      breakpoints={[
        { minWidth: 480, cols: 3, spacing: 'sm' },
        { minWidth: 768, cols: 4, spacing: 'md' },
        { minWidth: 1024, cols: 5, spacing: 'lg' },
        { minWidth: 1920, cols: 6, spacing: 'xl' }
      ]}
      mt={15}
      spacing="md"
    >
      {cards.map((num) => (
        <div className="card" key={num}>
          <img 
            src="https://placehold.co/300x300" 
            alt={`Card ${num}`}
          />
          <div className="card-body">
            <h2 className="card-title">Titulo {num}</h2>  
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
      ))}
    </SimpleGrid>
  );
}

export default MostProductS;
