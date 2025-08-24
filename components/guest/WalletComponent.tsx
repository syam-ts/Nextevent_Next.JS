"use client";
import React, { useState } from "react";
import { useGetWallet } from "../../hooks/guest/wallet/useGetWallet";
import {
    Wallet,
    ArrowUpRight,
    ArrowDownLeft,
    Search,
    Filter,
    CreditCard,
    Eye,
    EyeOff,
} from "lucide-react";

const WalletComponent = () => {
    
    const { data } = useGetWallet();
    const [showBalance, setShowBalance] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState<"all" | "credit" | "debit">(
        "all"
    );

    const filteredTransactions = data?.wallet?.transactions?.filter(
        (transaction) => {
            const matchesSearch =
                transaction.fromName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                transaction.fromId.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter =
                filterType === "all" || transaction.type === filterType;
            return matchesSearch && matchesFilter;
        }
    );

    return (
        <div className="min-h-screen w-full p-4 lg:p-8 bg-white">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mb-6 shadow-lg">
                        <Wallet className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
                        My Wallet
                    </h1>
                    <p className="text-orange-500 text-base">
                        Manage your balance and view transaction history
                    </p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                <CreditCard className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Current Balance
                                </h2>
                                <p className="text-gray-600 text-sm">Available funds</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowBalance(!showBalance)}
                            className="p-2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
                        >
                            {showBalance ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    <div className="text-center mb-8">
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                            {showBalance
                                ? `₹${data?.wallet.balance.toLocaleString()}`
                                : "₹••••••"}
                        </div>
                        <hr className="text-gray-300" />
                        <p className="text-gray-600 text-2xl">Balance</p>
                    </div>
                </div>

                <div
                    className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                    style={{
                        animation: "slideUp 0.8s ease-out",
                    }}
                >
                    <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-6">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Transaction History
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-orange-300" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search transactions..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="block w-full pl-12 pr-4 py-3 border border-orange-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-gray-900 placeholder-orange-300 bg-white/90"
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Filter className="h-5 w-5 text-orange-300" />
                                </div>
                                <select
                                    value={filterType}
                                    onChange={(e) =>
                                        setFilterType(e.target.value as "all" | "credit" | "debit")
                                    }
                                    className="pl-12 cursor-pointer pr-8 py-3 border border-orange-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-gray-900 bg-white/90"
                                >
                                    <option value="all" className="cursor-pointer">
                                        All Transactions
                                    </option>
                                    <option value="credit" className="cursor-pointer">
                                        Credits Only
                                    </option>
                                    <option value="debit" className="cursor-pointer">
                                        Debits Only
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Transaction
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Type
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Date & Time
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Reference ID
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data?.wallet?.transactions?.map((transaction) => (
                                    <tr
                                        key={transaction._id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div
                                                    className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 ${transaction.type === "credit"
                                                            ? "bg-green-100"
                                                            : "bg-red-100"
                                                        }`}
                                                >
                                                    {transaction.type === "credit" ? (
                                                        <ArrowDownLeft className="w-5 h-5 text-green-600" />
                                                    ) : (
                                                        <ArrowUpRight className="w-5 h-5 text-red-600" />
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-gray-900">
                                                        {transaction.fromName}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        ID: {transaction._id}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.type === "credit"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                                    }`}
                                            >
                                                {transaction.type === "credit" ? "Credit" : "Debit"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div
                                                className={`text-sm font-bold ${transaction.type === "credit"
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                    }`}
                                            >
                                                {transaction.type === "credit" ? "+" : "-"}₹
                                                {transaction.amount.toLocaleString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {transaction.createdAt.toString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                {transaction.fromId}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredTransactions?.length === 0 && (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                No transactions found
                            </h3>
                            <p className="text-gray-600">
                                Try adjusting your search or filter criteria
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default WalletComponent;
