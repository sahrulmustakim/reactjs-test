import { FaRegListAlt } from "react-icons/fa";

export default function Header() {
    return (
        <header className="App-header">
            <table>
                <tr>
                    <td>
                        <FaRegListAlt className="Header-icon" />
                    </td>
                    <td>
                        <h1>Invoice Claim</h1>
                    </td>
                </tr>
            </table>
        </header>
    );
}