import React from 'react';

const ShowModalFeedback = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="btn">Admin Feedback</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg"></h3>
                    <p className="py-4"></p>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowModalFeedback;