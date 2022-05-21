import { Button, Form, Modal } from 'react-bootstrap'

const DeleteIncomeForm = ({ showDeleteIncomeModal, handleCloseDeleteIncomeModal, handleDeleteIncome, name, cost}) => {
    const handleClose = () => {      
        handleCloseDeleteIncomeModal();
    };

    function handleSubmit(event) {
        event.preventDefault();
        handleClose();
        handleDeleteIncome();
      
    }
    

    return (
        <Modal show={showDeleteIncomeModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Income</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>                   
                    <Form.Group>
                        <Form.Label>Are you sure you want to delete this income entry named <b>{name}</b> with a cost of <b>₱{cost}</b>?</Form.Label>
                    </Form.Group>
                    <Button type="submit" variant="danger">
                            YES
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                            NO
                    </Button> {' '}
            
                </Form>
            </Modal.Body>
        </Modal>
    )

    
}
export default DeleteIncomeForm;