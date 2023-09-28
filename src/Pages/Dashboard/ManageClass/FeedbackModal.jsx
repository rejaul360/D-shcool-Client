import React from 'react';
import Swal from 'sweetalert2';

const FeedbackModal = ({ my }) => {
    // console.log(my);
    // const {_id} = my
    // console.log(my._id);

    const handleSubmit = (event, my ) => {
        event.preventDefault();

        console.log(my);
    
        // Access form field values
        const formData = new FormData(event.target);
        const textValue = formData.get('text');
    
        // Perform any desired action with the form data
        console.log( textValue);

         const addclass = {textValue}

        fetch(`https://summer-camp-server-ochre-six.vercel.app/addclass/${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addclass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Feedback Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })

      };
    return (
        <div>
            <label htmlFor="my_modal_6" className="btn">Feedback</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-black">
                    <form onSubmit={()=>handleSubmit(my)}>
                        <label className='text-3xl' htmlFor="text">Enter Feedback </label><br />
                        <input className='h-32 w-full border text-2xl flex break-words justify-start ' type="text" id="text" name="text" /><br /><br />
                        <input className='btn btn-primary' type="submit" value="Submit" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn ">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;