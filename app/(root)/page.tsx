import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const loggedIn = {
        firstName: 'Adrian',
        lastName: 'JSM',
        email: 'contac@jsmastery.pro'
    }

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your accuount and transaction"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                {/* RECENT TRANSACTION */}
            </div>

            <RightSideBar 
                user={loggedIn}
                transactions={[]}
                banks={[{}, {}]}
            />
        </section>
    )
};

export default Home;