function checkUsersValid(validUsers){
    return function isAllValidUsers(users){
        return users.every(function(user){
            return validUsers.some(function(validUser){
                if(validUser == user)
                    return true;
            });
        });
    }
}

module.exports = checkUsersValid;
