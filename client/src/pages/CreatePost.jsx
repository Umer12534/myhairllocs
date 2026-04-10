import React from 'react'

const CreatePost = () => {

    function handelsubmit(e){
        e.preventDefault();

    }
    return (
        <section className='createpost'>
            <h1>Create a Post</h1>
            <form onSubmit={handelsubmit}>
                <label htmlFor='caption'>Caption</label>
                <input type='text' required name='caption' placeholder='caption'></input>
                <label htmlFor='image' >Image</label>
                <br></br>
                <input type='file' name='image' ></input>
                <button type='submit'>submit</button>
            </form>
        </section>
    )
}

export default CreatePost
