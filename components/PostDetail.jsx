import React from 'react';
import moment from 'moment'

const PostDetail = ({ post }) => {
    const author = post.author[0];
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4 text-[#351447]">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-4 font-medium text-[#351447]">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4 text-[#351447]">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };
  return (
    <section className="bg-[#a266cf] shadow-lg rounded-xl lg:p-8 p-4">
      {post.featuredImage && (
        <img src={post.featuredImage.url} alt={post.title} className="w-full h-60 object-cover rounded-t-lg" />
      )}
        <div className="flex text-center items-center justify-center my-4 w-full ">
            {author && (
            <div className="flex items-center">
                {author.photo && author.photo.url && (
                <img
                    src={author.photo.url}
                    alt={author.name}
                    className="w-10 h-10 rounded-full"
                />
                )}
                <p className="text-gray-600 ml-4  text-lg">{author.name}</p>
            </div>
            )}
            <div className="text-gray-600 ml-4 text-lg flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-[#351447]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="">{moment(post.createdAt).format('DD MMMM, YYYY')}</span>
            </div>
        </div>
        <div className="">
            <h1 className="text-2xl font-extrabold mb-4 text-center text-[#f4ecfb]">{post.title}</h1>
            {post.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));
                return getContentFragment(index, children, typeObj, typeObj.type);
            })}
        </div>
    </section>
  );
};

export default PostDetail;
