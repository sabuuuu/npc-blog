'use client'

import React,{useState, useEffect, useRef} from 'react'

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef();
  const nameEl = useRef();
  const storeData = useRef();

  // useEffect(() => {
  //   nameEl.current.value = window.localStorage.getItem('name');
  //   storeData.current = window.localStorage.getItem('name');
  // }, [])


  const handleCommentSubmission = async () => {
    setError(false)

    const comment = commentEl.current.value;
    const name = nameEl.current.value;

    if(!comment || !name){
      setError(true)
      return
    }

    const res = await fetch(`/api/posts/${slug}/comments`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment, name})
    })

    const data = await res.json();
    console.log(data);
  }
  console.log(storeData)
  return (
    <section className="bg-[#a266cf] rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-[#f4ecfb] border-opacity-45 pb-4 text-[#f4ecfb]">Leave a comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea ref={commentEl} className="p-2 border border-[#351447] w-full rounded-lg focus:outline-none bg-[#502b64] bg-opacity-35 text-[#f4ecfb] placeholder:text-[#f4ecfb] placeholder:text-opacity-35" placeholder="Comment" name="comment" />

        <input type="text" ref={nameEl} className="p-2  border border-[#351447] w-full rounded-lg focus:outline-none bg-opacity-35 text-[#f4ecfb] bg-[#502b64] placeholder:text-[#f4ecfb] placeholder:text-opacity-35" placeholder="Name" name="name" />

        <div className="grid grid-cols-1 gap-4 ">
          <div className="flex items-center space-x-2">
            <input ref={storeData} type="checkbox" id="storeData" name="storeData" value="true" className="w-4 h-4 "/>
            <label className="text-[#f4ecfb]" htmlFor="storeData">Save my name and email in this browser for the next time I comment.</label>
          </div>
        </div>
        {error && <p className="text-[#590012] text-center font-semibold">All fields are required</p>}
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <button type="button" onClick={handleCommentSubmission} className="transition duration-300 text-[#f4ecfb] font-medium hover:bg-[#502b64] bg-[#351447] px-16 py-2 rounded-lg shadow-xl">Post Comment</button>
        {showSuccessMessage && <p className="text-green-800 text-center font-semibold">Comment submitted for review</p>}
      </div>
    </section>
  )
}

export default CommentsForm