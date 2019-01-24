import React from 'react';
import { Segment, Button} from 'semantic-ui-react';

const Header = ({kittenize, addCard}) => (
  <Segment>
    <h1>Developer Test</h1>
    <Button ui animated button
      type="submit"
      className="teal"
      id="add-btn"
      onClick={kittenize}>
        <div className="visible content">Kittenize!</div>
        <div className="hidden content">
          <i className="smile icon"></i>
        </div></Button>
    <Button ui animated button
      type="submit"
      className="blue"
      id="add-btn"
      onClick={addCard}>
        <div className="visible content">Add Card</div>
        <div className="hidden content">
          <i className="plus square icon"></i>
        </div>
    </Button>   

  </Segment>
)

export default Header;
