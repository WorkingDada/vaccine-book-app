import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Finding a place for Vaccine?</h1>
                <h2>Contact us for more info</h2>
            </div>
        </div>
    );
}