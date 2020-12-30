import { BooksContainer, Button } from './Books/Styles.styled';

const Help = () => {
  return (
    <BooksContainer>
      <div className="slider">
        <div className="no-books">
          <p>Page currently under contruction.</p>
          <Button to="/">Go Home</Button>
        </div>
      </div>
    </BooksContainer>
  );
};

export default Help;
