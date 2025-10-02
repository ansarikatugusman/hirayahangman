const GetAvatarURL = (avatar) => {
    return new URL(`src/assets/images/avatars/${avatar}.svg`, import.meta.env.VITE_DOMAIN).href
}

export default GetAvatarURL