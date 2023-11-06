

const Breadcrumb = () => {
    return (
        <div>
            <ol className="flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
                <li className="text-sm text-gray-600 dark:text-gray-400">
                    <a className="flex items-center hover:text-blue-600" href="#">
                        Home
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                        </svg>
                    </a>
                </li>

                <li className="text-sm text-gray-600 dark:text-gray-400">
                    <a className="flex items-center hover:text-blue-600" href="#">
                        App Center
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                        </svg>
                    </a>
                </li>

                <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200" aria-current="page">
                    Application
                </li>
            </ol>
        </div>
    );
};

export default Breadcrumb;