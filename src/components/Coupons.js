import { useState } from 'react'
import { Card, Button, Modal,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





function Coupons({ coupon }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function copy() {
    
    var copyText = document.getElementById("copyCode");
  
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the Code: " + copyText.value);
  
  }

  
  

  
  return (
    
    

    <Card className="mb-4 ms-4 me-5 mt-4 p-5" style={{ width: '19rem' }}>
      <Card.Img variant="top"  src={coupon.brandImg} alt={coupon.name} />
      <Card.Body>
        <Card.Title className="text-align-center"> {coupon.description} </Card.Title>
        <a rel="noopener noreferrer" href="https://www.google.com/search?q=your+affiliate+link&source=hp&ei=TdAjYc-4Lcf0hwPi9YzIAQ&iflsig=AINFCbYAAAAAYSPeXZsxg1TlDcp0KfACowyzB5t8c1hL&oq=your+affilate+li&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQDRAeMggIABANEAUQHjIICAAQDRAFEB4yCAgAEA0QBRAeMggIABANEAUQHjIICAAQDRAFEB4yCAgAEA0QBRAeMggIABANEAUQHjIICAAQCBANEB4yCAgAEAgQDRAeOhQILhCABBCxAxCDARDHARDRAxCTAjoRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEMcBENEDOg4ILhCABBCxAxDHARCjAjoRCC4QgAQQsQMQgwEQxwEQowI6CAgAEIAEELEDOgUIABCABDoICC4QgAQQsQM6CwgAEIAEELEDEIMBOgUILhCABDoOCC4QgAQQsQMQxwEQrwE6GQguELEDEIMBELEDELEDEMcBENEDEAoQkwI6BAgAEAo6BwguEIAEEAo6BwgAEIAEEAo6CwguEIAEELEDEJMCOggIABCxAxCDAToKCAAQgAQQRhD_AToGCAAQFhAeOgUIIRCgAToECAAQEzoICAAQDRAeEBM6CAgAEBYQHhATUOYFWK0lYOMtaAFwAHgAgAGVAYgB9w-SAQQxLjE2mAEAoAEB&sclient=gws-wiz" target="_blank">
          <Button variant="primary" onClick={handleShow} className="mt-3">
          Show Discount Code
        </Button>
        </a>
       
        
        

        <Modal show={show} onHide={handleClose} className="align-center" >
          <Modal.Header closeButton>
            <Modal.Title className="align-center" >  {coupon.brand} {coupon.description} </Modal.Title>
          </Modal.Header>
          <Modal.Body className="align-center" >
            <img src={coupon.brandImg} className="modal-img margin-left-120"  alt={coupon.name} />
            <br />
            
         <input type="text" className="margin-left-120" value={coupon.couponCode} id="copyCode" disabled />
         <Button variant="success" onClick={copy} className="ms-2 mb-1" size="sm" >Copy Code</Button>
         
      
          </Modal.Body>
          <Modal.Footer>
         
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
     
      </Card.Body>
    </Card>

  )
}

export default Coupons
