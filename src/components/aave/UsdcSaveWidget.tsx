import { YieldInfo } from "../../services/AaveV3YieldService";
import usdcLogo from "../../assets/usdc.png";
import { useSupplyBorrowModal } from "../../providers/SupplyBorrowModalProvider";
import { useReadCab } from "@magic-account/wagmi";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface UsdcSaveModalProps {
  usdcYields: YieldInfo[];
}

function UsdcSaveWidget({ usdcYields }: UsdcSaveModalProps) {
  const { openModal } = useSupplyBorrowModal();
  const { isConnected } = useAccount();
  const { data: cabBalance } = useReadCab();

  const handleSaveClick = () => {
    if (usdcYields) {
      openModal({
        actionType: "Supply",
        tokenSymbol: "USDC",
        tokenAddress: usdcYields[0].tokenAddress,
        apy: usdcYields[0].supplyYield,
        chainName: usdcYields[0].chainName,
        chainId: usdcYields[0].chainId,
        marketAddress: usdcYields[0].marketAddress,
        balances: {
          usdc: cabBalance ? formatUnits(cabBalance, 6) : "0.00",
          usdt: "0.00", // Replace with actual balance
        },
      });
    }
  };

  if (!usdcYields) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white py-8 sm:py-8 rounded-3xl shadow-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img src={usdcLogo} alt="USDC Logo" className="w-10 h-10 mr-3" />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                USDC Save/Borrow
              </h2>
            </div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Compare savings rates across different chains
            </p>
          </div>
          <dl className="mt-4 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {usdcYields.map((usdcYield, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-400/5 p-4 sm:p-6 lg:p-8"
              >
                <dt className="text-xs sm:text-sm font-semibold leading-6 text-gray-600">
                  {usdcYield.chainName}
                </dt>
                <dd
                  className={`order-first text-2xl sm:text-3xl font-semibold tracking-tight ${
                    index === 0 ? "text-green-500" : "text-gray-900"
                  } flex items-center justify-center`}
                >
                  {index === 0 && (
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1 sm:mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  )}
                  <span className="truncate">
                    {(usdcYield.supplyYield * 100).toFixed(2)}%
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleSaveClick}
              disabled={!isConnected}
              className="py-2 px-4 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsdcSaveWidget;
