public class UserLightningController {
    
    @AuraEnabled(cacheable=true)
    public static List<User> getAllUsers(){
        List<User> users = [
            SELECT
                Id,
                FirstName,
                LastName,
                Email,
                FullPhotoUrl
            FROM
                User
        ];
        return users;
    }

    @AuraEnabled
    public static String getFieldValue(String field) {
        Id loggedUserId = UserInfo.getUserId();
        String query = 'SELECT ' + field + ' FROM User WHERE Id = \'' 
                + loggedUserId + '\'';
        User userInfo = Database.query(query);
        return String.valueOf(userInfo.get(field));
    }

}
