import './header.css';
import { Login } from './login';
export function Header() {
    return (
        <div className="head">
            <div className="login">
                <li><Login></Login></li>
            </div>
        </div>
    );
}