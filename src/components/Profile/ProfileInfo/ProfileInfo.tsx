import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src = 'https://images.template.net/wp-content/uploads/2016/04/27051847/Cool-Nature-Wallpapaer-for-Download.jpg'
                    alt = '' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
        ;
};

export default ProfileInfo;
