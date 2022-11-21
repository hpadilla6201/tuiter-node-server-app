import people from './users.js'
let users = people

const UserController = (app) => {
   app.get('/api/users', findUsers)
   app.get('/api/users/:uid', findUserById);
   app.post('/api/users', createUser);
   app.delete('/api/users/:uid', deleteUser); // map URL pattern to handler function
   app.put('/api/users/:uid', updateUser);
}

const createUser = (req, res) => {
   const newUser = req.body;
   newUser._id = (new Date()).getTime() + '';
   users.push(newUser);
   res.json(newUser);
 }
 

const findUserById = (req, res) => {
   const userId = req.params.uid;
   const user = users
     .find(u => u._id === userId);
   res.json(user);
 }
 

const findUsers = (req, res) => {
   const type = req.query.type
   if(type) {
     const usersOfType = users
       .filter(u => u.type === type)
     res.json(usersOfType)
     return
   }
   res.json(users)
}

const deleteUser = (req, res) => {
  const userId = req.params['uid']; // get user ID from path parameter uid
  users = users.filter(usr => // filter out the user
    usr._id !== userId); // whose ID is the ID of the user we want to remove
  res.sendStatus(200); // respond with success code
}

const updateUser = (req, res) => {
  const userId = req.params['uid'];
  const updates = req.body;
  users = users.map((usr) =>
    usr._id === userId ?
      {...usr, ...updates} :
      usr
  );
  res.sendStatus(200);
 }
 


export default UserController