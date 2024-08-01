import React from "react";
import uploadFile from "../appwrite/uploadFile";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function stripHtmlAndTrim(text, wordLimit) {
  // Remove HTML tags
  const plainText = text.replace(/<\/?[^>]+>/gi, '');

  // Trim text to the specified number of words
  const trimmedText = plainText.split(' ').slice(0, wordLimit).join(' ');
  
  // Append ellipsis if the text was longer than the word limit
  return trimmedText + (plainText.split(' ').length > wordLimit ? '...' : '');
}

function PostCard({ $id, title, featuredImage, content }) {
  // Ensure that the featuredImage URL is valid
  console.log($id, title, featuredImage, content);
  
  const imageUrl = featuredImage
    ? uploadFile.getFilePreview(featuredImage)
    : "";

  const plainTextContent = stripHtmlAndTrim(content, 15);

  return (
    <Link to={`/post/${$id}`}>
      <div className="border rounded-md">
        <img
          src={imageUrl}
          className="aspect-video w-full"
          alt={title || "Post image"}
        />
        <div className="min-h-min p-3">
          <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
            #Technology
          </p>
          <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
            {title}
          </p>
          <p className="mt-4 w-full text-sm leading-normal text-gray-600">
            {plainTextContent}
          </p>
          <div className="mt-4 flex space-x-3 ">
            <img
              className="h-full w-10 rounded-lg"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Smith"
            />
            <div>
              <p className="text-sm font-semibold leading-tight text-gray-900">
                John Smith
              </p>
              <p className="text-sm leading-tight text-gray-600">
                1 April 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
