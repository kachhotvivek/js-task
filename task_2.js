// Stack (primitive), Heap(non primiive)

let myyoutubename = "vivekkachhot"

let anothername = myyoutubename
anothername = "vivek"

console.log(myyoutubename);
console.log(anothername);

let userone = {
    email : "user@vk.com",
    upi : "user@ybl"
}

let usertwo =userone

usertwo.email = "viekkachhor.com"

console.log(userone.email);
console.log(usertwo.email);