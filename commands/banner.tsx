import React from "react";

export default async function banner() {
    return (
        <pre className="text-sm text-green-300">
            {`
   _____ _   _ _  __ _ _   _    _ _       
  |  _  | | | (_)/ _(_) | | |  | (_)      
  | | | | |_| |_| |_ _| |_| |__| |_  ___  
  \_| |_/\__,_| |  _| |  _| / _` +
                " | |/ _ \ " +
                `
  | |\ \  / / | | | | | || (_| | |  __/ 
  \_| \_\/ /_/ |_| |_|_| \__,_|_|\___|`}
        </pre>
    );
}
