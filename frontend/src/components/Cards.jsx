

//PROFILE CARD
export const ProfileCard = () => {
    const navigate = useNavigate();
    const {user, clearUser} = useContext(UserContext);

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate('/')
    }

    return (
        user &&(
            <div classsName={cardStyles.profileCard}>
             <div className={cardStyles.profileInitialsContainer}>
                <span className={cardStyles.profileInitialsText}>
                    {user.name ? user.name.charAt(0).toUpperCase() : ""}
                </span>

             </div>
             <div classNmae={cardStyles.profileName}>
                {user.name || ""}
             </div>
             <button className={cardStyles.logoutButton} onClick={handleLogout}>  
                Logout
             </button>
            </div>
        )
    )
}