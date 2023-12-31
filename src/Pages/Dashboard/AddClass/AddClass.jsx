import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {

    const { user } = useContext(AuthContext)

    const handleAddClass = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const set = form.set.value;
        const postedBy = form.postedBy.value;
        const instractor = form.instractor.value;
        const price = form.price.value;
        const photo = form.image.value;



        const addclass = { name, set: parseFloat(set), instractor, price: parseFloat(price),   photo,postedBy, status:'pending', }

        console.log(addclass);

        // send data to the server
        fetch('https://summer-camp-server-ochre-six.vercel.app/addclass', {
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
                        text: 'Class Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
            form.reset()
    }
    return (
        <div className="bg-[#020822] p-24 rounded-3xl py-7 shadow-lg">
            <h2 className="text-center text-4xl font-bold  text-white  mb-6">Add Class</h2>
            <form onSubmit={handleAddClass}>
                {/* form name and quantity row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-white">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="class name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Available set</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="set" placeholder="Available set" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Instractor name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="instractor" placeholder="Instractor name" className="input input-bordered w-full" defaultValue={user?.displayName} />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="postedBy" placeholder="Email" className="input input-bordered w-full" defaultValue={user?.email} />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Price $</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Class" className="btn btn-outline btn-info w-full" />

            </form>
        </div>
    );
};

export default AddClass;