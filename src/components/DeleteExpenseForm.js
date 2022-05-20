import { Button, Form, Modal } from 'react-bootstrap'

const DeleteExpenseForm = ({ showDeleteExpenseModal, handleCloseDeleteExpenseModal, handleDeleteExpense, name, cost}) => {
    const handleClose = () => {      
        handleCloseDeleteExpenseModal();
    };

    function handleSubmit(event) {
        event.preventDefault();
        handleClose();
        handleDeleteExpense();
      
    }
    

    return (
        <Modal show={showDeleteExpenseModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>                   
                    <Form.Group>
                        <Form.Label>Are you sure you want to delete this expense entry named <b>{name}</b> with a cost of <b>₱{cost}</b>?</Form.Label>
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
export default DeleteExpenseForm;