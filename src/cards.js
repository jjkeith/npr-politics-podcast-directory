import React from 'react';
// TODO Implement more dynamic classes
// import classnames from 'classnames';
import journalists from './data';
import { Button, ButtonGroup, Col, Image, Label, Modal, Panel, Row } from 'react-bootstrap';


let journalistsToDisplay = journalists;

class Cards extends React.Component {
  constructor( props, context ) {
    super( props, context );
    
    this.handleShowModal = this.handleShowModal.bind( this );
    this.handleCloseModal = this.handleCloseModal.bind( this );
    // this.renderCard = this.renderCard.bind( this );

    this.state = {
      showModal: false,
      currentJournalist: {}
    };
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleShowModal( film ) {
    this.setState({ 
      showModal: true,
      currentJournalist: film
    });
  }


  handleFilter( filterVal ) {
    if ( filterVal == null ) {
      return this.setState( journalistsToDisplay = journalists );
    }
    if ( filterVal === 'current') {
      return this.setState( journalistsToDisplay = journalists.filter( journalist => journalist.current ));
    }
    if ( filterVal === 'host') {
      return this.setState( journalistsToDisplay = journalists.filter( journalist => journalist.host ));
    }
    return this.setState( journalistsToDisplay = journalists.filter( journalist => journalist.beat === filterVal ));
  }

  // TODO Could be made more versatile/dry with lodash
  handleSort( sortProp ) {
    return this.setState( journalistsToDisplay.sort(( a, b ) => {
      if ( sortProp === 'name' ) {
        return a.lastName < b.lastName ? -1 : 1;
      }
      if ( sortProp === 'beat') {
        return a.beat < b.beat ? -1 : 1;
      }
      return journalistsToDisplay;
    }))
  }

  renderCard( journalist, index ) {
    return (
      <Col  xs={ 12 } sm={ 6 } lg={ 3 } key={ index }>
        <Panel>
          <div className="img-wrapper">
            <Image className="img" src={ journalist.headShot } alt="" />
          </div>
          <Panel.Body className="info-wrapper">
            <h4 className="panel-title">{ journalist.firstName } {journalist.lastName }</h4>
            <p className="text-muted mb0">{ journalist.title }</p>
              { journalist.host && ( <Label bsStyle="success">Host</Label> )}
              { !journalist.current && ( <Label>No longer on podcast</Label> )}

          </Panel.Body>
          <Panel.Footer className="button-wrapper">
            <Button className="modal-trigger" onClick={ () => this.handleShowModal( journalist )}>See Bio</Button>
          </Panel.Footer>
        </Panel>
      </Col>
    );
  }

  renderModal( currentJournalist ) {
    return (
      <Modal show={ this.state.showModal } onHide={ this.handleCloseModal }>
        <Modal.Header closeButton>
          <Modal.Title>{ currentJournalist.firstName } { currentJournalist.lastName }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="img-wrapper">
            <Image className="panel-image" src={ currentJournalist.headShot } alt="" />
          </div>
          {/* TODO Can avoid using dangerouslySetInnerHTML by stripping out links and adding unicode paragraph breaks*/}
          <div dangerouslySetInnerHTML={{ __html: currentJournalist.bio }} />
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={ this.state.handleCloseModal }>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {
    return (
      <Row>
        <Col componentClass='aside' className="sticky-top" sm={ 2 } md={ 4 } lg={ 2 }>
          <p className="filter-options">Filter by:</p>
          <ButtonGroup vertical block>
            <Button bsStyle="primary" className="mod-filter" onClick={ () => this.handleFilter( 'current' ) }>
              Current
            </Button>
            <Button bsStyle="primary" className="mod-filter" onClick={ () => this.handleFilter( 'host' ) }>
              Hosts
            </Button>
            <Button bsStyle="primary" className="mod-filter" onClick={ () => this.handleFilter( null ) }>
              Show All
            </Button>
          </ButtonGroup>
          <p className="sort-options">Sort by:</p>
          <ButtonGroup vertical block>
            <Button bsStyle="primary" className="mod-sort" onClick={ () => this.handleSort( 'name' ) }>
              Name
            </Button>
            <Button bsStyle="primary" className="mod-sort" onClick={ () => this.handleSort( 'Beat' ) }>
              Beat
            </Button>
          </ButtonGroup>
        </Col>

        <Col componentClass='section' sm={ 10 } md={ 8 } lg={ 10 }>
          <Row>
            { journalistsToDisplay.map(( journalist, index ) => ( this.renderCard( journalist, index ) ))}
          </Row>
        </Col>
        { this.renderModal( this.state.currentJournalist ) }
      </Row>
    );
  }
}

Cards.propTypes = {

};


export default Cards;
