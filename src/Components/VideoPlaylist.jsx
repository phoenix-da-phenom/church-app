import React from "react";
import Thumnail from "../Image/PHOTO-2022-11-20-12-37-22.jpg";
import { MdTimer } from "react-icons/md";
import { ImEye } from "react-icons/im";
export default function VideoPlaylist() {
  return (
    <div className="w-100">
      <ul className="flex flex-col gap-3 cursor-pointer w-100">
        <li>
          <div id="videoContainer" className="flex gap-4">
            <div id="video_thumbnail">
              <img
                src={Thumnail}
                className="w-32 h-50 rounded-2xl"
                alt="video thumbnail"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div id="videoTitle" className="pt-2">
                <a href="" className="text-accent-main font-bold ">
                  Why Jesus Died for us?
                </a>
              </div>

              <div id="videoDescription" className="text-gray-400 text-sm">
                <p className="flex items-center gap-1">
                  {" "}
                  <MdTimer />5 min
                </p>
                <p className="flex items-center gap-1">
                  <ImEye /> 1234 views
                </p>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div id="videoContainer" className="flex gap-4">
            <div id="video_thumbnail">
              <img
                src={Thumnail}
                className="w-32 h-50 rounded-2xl"
                alt="video thumbnail"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div id="videoTitle" className="pt-2">
                <a href="" className="text-accent-main font-bold ">
                  Why Jesus Died for us?
                </a>
              </div>

              <div id="videoDescription" className="text-gray-400 text-sm">
                <p className="flex items-center gap-1">
                  {" "}
                  <MdTimer />5 min
                </p>
                <p className="flex items-center gap-1">
                  <ImEye /> 1234 views
                </p>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div id="videoContainer" className="flex gap-4">
            <div id="video_thumbnail">
              <img
                src={Thumnail}
                className="w-32 h-50 rounded-2xl"
                alt="video thumbnail"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div id="videoTitle" className="pt-2">
                <a href="" className="text-accent-main font-bold ">
                  Why Jesus Died for us?
                </a>
              </div>

              <div id="videoDescription" className="text-gray-400 text-sm">
                <p className="flex items-center gap-1">
                  {" "}
                  <MdTimer />5 min
                </p>
                <p className="flex items-center gap-1">
                  <ImEye /> 1234 views
                </p>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div id="videoContainer" className="flex gap-4">
            <div id="video_thumbnail">
              <img
                src={Thumnail}
                className="w-32 h-50 rounded-2xl"
                alt="video thumbnail"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div id="videoTitle" className="pt-2">
                <a href="" className="text-accent-main font-bold ">
                  Why Jesus Died for us?
                </a>
              </div>

              <div id="videoDescription" className="text-gray-400 text-sm">
                <p className="flex items-center gap-1">
                  {" "}
                  <MdTimer />5 min
                </p>
                <p className="flex items-center gap-1">
                  <ImEye /> 1234 views
                </p>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div id="videoContainer" className="flex gap-4">
            <div id="video_thumbnail">
              <img
                src={Thumnail}
                className="w-32 h-50 rounded-2xl"
                alt="video thumbnail"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div id="videoTitle" className="pt-2">
                <a href="" className="text-accent-main font-bold ">
                  Why Jesus Died for us?
                </a>
              </div>

              <div id="videoDescription" className="text-gray-400 text-sm">
                <p className="flex items-center gap-1">
                  {" "}
                  <MdTimer />5 min
                </p>
                <p className="flex items-center gap-1">
                  <ImEye /> 1234 views
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
