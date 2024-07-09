'use client'

import React,{useState, useEffect, useRef} from 'react'
import {submitComment} from '@/services'

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, [])


  const handleCommentSubmission = async () => {
    setError(false)

    const comment = commentEl.current.value;
    const name = nameEl.current.value;
    const email = emailEl.current.value;
    const storeData = storeDataEl.current.checked;

    if(!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {comment, name, email, slug}

    if(storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj)
    .then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }

  return (
    <section className="bg-[#a266cf] rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-[#f4ecfb] border-opacity-45 pb-4 text-[#f4ecfb]">Leave a comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea ref={commentEl} className="p-2 border border-[#351447] w-full rounded-lg focus:outline-none bg-[#502b64] bg-opacity-35 text-[#f4ecfb] placeholder:text-[#f4ecfb] placeholder:text-opacity-35" placeholder="Comment" name="comment" />

        <input type="text" ref={nameEl} className="p-2  border border-[#351447] w-full rounded-lg focus:outline-none bg-opacity-35 text-[#f4ecfb] bg-[#502b64] placeholder:text-[#f4ecfb] placeholder:text-opacity-35" placeholder="Name" name="name" />

        <input type="email" ref={emailEl} className="p-2 border border-[#351447] w-full rounded-lg focus:outline-none bg-opacity-35 text-[#f4ecfb] bg-[#502b64] placeholder:text-[#f4ecfb] placeholder:text-opacity-35" placeholder="Email" name="email" />

        <div className="grid grid-cols-1 gap-4 ">
          <div className="flex items-center space-x-2">
            <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" className="w-4 h-4 "/>
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