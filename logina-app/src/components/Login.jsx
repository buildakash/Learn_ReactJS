import React from "react";
// import GoogleLogin from "react-google-login";
import Sign from "./Sign";
function Login(){

   

    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <nav class="flex justify-center space-x-10 mb-7">
          <a
            href="/dashboard"
            class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Home
          </a>
          <a
            href="/team"
            class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Team
          </a>
          <a
            href="/projects"
            class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Projects
          </a>
          <a
            href="/reports"
            class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Reports
          </a>
        </nav>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Sign />

        <div>
          <div class="flex items-center space-x-2 text-base justify-center">
            <h4 class="font-semibold text-slate-900">Contributors</h4>
            <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
              204
            </span>
          </div>
          <div class="mt-3 flex -space-x-2 overflow-hidden justify-center">
            <img
              class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="mt-3 flex text-sm font-medium justify-center">
            <a href=" " class="text-blue-500">
              + 198 others
            </a>
          </div>
        </div>
      </div>
    );
    
    
    
    
}

export default Login;

// return(
    //     // <div className="container">
    //     //     <h1>Login</h1>
           
    //     //    <form>
    //     //    <input  name="usern"  onChange={handledetails} placeholder="Your username" value={details.usern}></input>
    //     //    <input  name="pass" onChange={handledetails} placeholder="Your password" value={details.pass}></input>
          
    //     //     <button>Login</button>
    //     //     </form>
        
    //     // </div>
    // )